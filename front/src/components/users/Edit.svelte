<script lang="ts">
    let { userModel } = $props();
    let id = $props.id();
</script>

{#if userModel.editDialog}
    <div
        class="w-full text-black h-full fixed top-0 left-0 flex flex-col items-center bg-transparent justify-center backdrop-blur-xl"
    >
        <div class="bg-white rounded-md p-4 w-96">
            <form onsubmit={(e) => userModel.editUser(userModel.user.id, e)}>
                <h2 class="text-lg font-bold">Editar Usuario</h2>
                <hr />

                <div class="p-2 flex flex-col">
                    <label for="fullName" class="block text-sm font-bold"
                        >Nombre Completo:</label
                    >
                    <input
                        class="border border-gray-400 rounded-md p-2"
                        placeholder="Ingrese el nombre completo"
                        type="text"
                        id={`fullName-${id}`}
                        name="fullName"
                        value={userModel.user.fullName}
                    />
                </div>
                <div class="p-2 flex flex-col">
                    <label for="email" class="block text-sm font-bold"
                        >Correo Electronico:</label
                    >
                    <input
                        class="border border-gray-400 rounded-md p-2"
                        placeholder="Ingrese el correo electronico"
                        type="email"
                        id={`email-${id}`}
                        name="email"
                        value={userModel.user.email}
                    />
                </div>

                <div class="p-2 flex justify-end gap-2 mt-3">
                    <button
                        class="bg-red-400 text-white px-4 py-2 rounded-md"
                        onclick={() => (userModel.editDialog = false)}
                    >
                        Cancelar
                    </button>
                    <button
                        class="bg-blue-400 text-white px-4 py-2 rounded-md"
                        type="submit"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    </div>
{/if}
