<script lang="ts">
    let { userModel } = $props();
</script>
{#if userModel.deleteDialog}
    <dialog
        open={userModel.deleteDialog}
        class="w-full h-full fixed top-0 left-0 flex items-center bg-transparent justify-center backdrop-blur-xl"
    >
        <div class="bg-white p-4 rounded-md w-96">
            <button
                aria-label="Cerrar"
                class="close"
                onclick={() => (userModel.deleteDialog = false)}>X</button
            >
            <div class="p-4">
                <h2 class="text-lg font-bold">
                    Desea eliminar al usuario {userModel.user.username}?
                </h2>
            </div>
            <div class="p-2 flex justify-end gap-2 mt-3">
                <button
                    class="bg-red-400 text-white px-4 py-2 rounded-md"
                    onclick={() => (userModel.deleteDialog = false)}
                >
                    Cancelar
                </button>
                <button
                    class="bg-blue-400 text-white px-4 py-2 rounded-md"
                    onclick={() => userModel.deleteUser(userModel.user.id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    </dialog>
{/if}
