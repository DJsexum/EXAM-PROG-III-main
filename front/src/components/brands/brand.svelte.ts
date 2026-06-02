import { http } from '@core/http';

interface Brand {
  id: number;
  name: string;
}

class BrandsModel {
  brand = $state<Brand | null>(null);
  brands = $state<Brand[]>([]);
  deleteDialog = $state(false);
  editDialog = $state(false);
  createDialog = $state(false);

  async getBrands() {
    this.brands = await http.get<Brand[]>(`${import.meta.env.PUBLIC_API_URL}/brands`);
  }

  async createBrand(e: Event) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData) as { name: string };

    await http.post<Brand>(`${import.meta.env.PUBLIC_API_URL}/brands`, data);
    await this.getBrands();
    this.createDialog = false;
  }

  async editBrand(id: number | undefined, e: Event) {
    if (!id) return;
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData) as { name?: string };

    await http.patch<Brand>(`${import.meta.env.PUBLIC_API_URL}/brands/${id}`, data);
    await this.getBrands();
    this.editDialog = false;
  }

  async deleteBrand(id: number | undefined) {
    if (!id) return;
    await http.delete<Brand>(`${import.meta.env.PUBLIC_API_URL}/brands/${id}`);
    await this.getBrands();
    this.deleteDialog = false;
  }

  showCreateModal() {
    this.brand = null;
    this.createDialog = true;
  }

  showEditModal(brand: Brand) {
    this.brand = brand;
    this.editDialog = true;
  }

  showDeleteModal(brand: Brand) {
    this.brand = brand;
    this.deleteDialog = true;
  }
}

export const brandsModel = new BrandsModel();
