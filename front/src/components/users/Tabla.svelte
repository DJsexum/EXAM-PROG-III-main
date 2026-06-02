<script lang="ts">
    import Delete from "./Delete.svelte";
    import Edit from "./Edit.svelte";
    import Create from "./Create.svelte";
    import { userModel } from "./user.svelte";
    import { onMount } from "svelte";

    onMount(async () => {
        await userModel.getUsers();
    });
</script>

<Delete {userModel} />
<Edit {userModel} />
<Create {userModel} />

<div class="w-full flex justify-end mb-4">
    <button class="bg-gray-800 text-xl text-white px-2 py-1 rounded-md border border-white" onclick={() => userModel.showCreateModal()}>
        Nuevo Usuario
    </button>
</div>

<table class="flex-1 w-full">
    <thead>
        <tr>
            <th class="bg-gray-800 text-white text-left p-2">Nombre</th>
            <th class="bg-gray-800 text-white text-left p-2">Email</th>
            <th class="bg-gray-800 text-white p-2">Acciones</th>
        </tr>
    </thead>
    <tbody>
        {#each userModel.users as user}
            <tr class="odd:bg-gray-100 dark:odd:bg-gray-700">
                <td class="px-2 py-1">{user.fullName}</td>
                <td class="px-2 py-1">{user.email}</td>
                <td class="px-2 py-1">
                    <div class="flex justify-center gap-2">
                        <button
                            onclick={() => userModel.showEditModal(user)}
                            aria-label="Editar"
                            class="bg-gray-800 text-white px-4 rounded-md"
                        >
                            Editar
                        </button>
                        <button
                            onclick={() => userModel.showDeleteModal(user)}
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
