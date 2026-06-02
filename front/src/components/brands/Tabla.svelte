<script lang="ts">

    import Delete from "./Delete.svelte";
    import Edit from "./Edit.svelte";
    import Create from "./Create.svelte";
    import { brandsModel } from "./brand.svelte";
    import { onMount } from "svelte";

    onMount(async () => 
    {
        await brandsModel.getBrands();
    });

</script>

<Delete {brandsModel} />
<Edit {brandsModel} />
<Create {brandsModel} />

<div class="w-full flex justify-end mb-4">

    <button class="bg-gray-800 text-xl text-white px-2 py-1 rounded-md border border-white" onclick={() => brandsModel.showCreateModal()}>

        Nueva Marca

    </button>

</div>

<table class="flex-1 w-full">

    <thead>

        <tr>
                <th class="bg-gray-800 text-white text-left p-2">Nombre</th>
                <th class="bg-gray-800 text-white p-2">Acciones</th>
    </tr> 

    </thead>

    <tbody>

        {#each brandsModel.brands as brand}

            <tr class="odd:bg-gray-100 dark:odd:bg-gray-700">
                <td class="px-2 py-1">{brand.name}</td>
                <td class="px-2 py-1">
                    <div class="flex justify-center gap-2">

                        <button
                            onclick={() => brandsModel.showEditModal(brand)}
                            aria-label="Editar"
                            class="bg-gray-800 text-white px-4 rounded-md"
                        >

                            Editar

                        </button>

                        <button
                            onclick={() => brandsModel.showDeleteModal(brand)}
                            aria-label="Eliminar"
                            class="bg-red-500 text-white px-4 rounded-md"
                        >

                            Eliminar

                        </button>

                    </div>

                </td>

            </tr>

        {/each}

    </tbody>

</table>