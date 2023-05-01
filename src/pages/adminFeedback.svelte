<script lang="ts">
    import { feedbackInfo } from '../stores/StoresData';
    import * as _ from 'lodash'
    $: feedbackData = $feedbackInfo;
    feedbackData = _.reverse( feedbackData )
</script>

<div class="md:mx-10 mx-2 md:pt-6 pt-2 md:flex hidden">
    <div class="w-full overflow-hidden shadow-md sm:rounded-lg ">
        <div class="r-table">
            <p class="md:text-4xl text-3xl font-bold text-gray-900 mx-4 italic">User Feedbacks</p>
            <table class="w-full text-sm text-left text-gray-500  mt-10">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Message
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {#each feedbackData as user}
                        <tr class="bg-white border-b">
                            <td data-th="Name" class="px-6 py-4 font-medium whitespace-nowrap ">
                                <p>{user.userName}</p>
                            </td>
                            <td data-th="Email" class="px-6 py-4">
                                <p>{user.userEmail}</p>
                            </td>
                            <td data-th="Message" class="px-6 py-4">
                                <p>{user.message}</p>
                            </td>
                        </tr>
                    {/each} 
                </tbody>
            </table>
        </div>
    </div>
</div>

<div class="md:hidden mx-3 py-3">
    <p class="md:text-4xl text-3xl font-bold text-gray-900 m-4 italic">User Feedbacks</p>
    {#each feedbackData as user}
      <div class="p-3 grid grid-cols-4 gap-2 bg-white rounded-lg overflow-hidden shadow-lg border hover:border-gray-300">
        <div class="text-black font-bold col-span-1">
            <div class="my-2">Name : </div>
            <div class="my-2">Email : </div>
            <div class="my-2">Message : </div>
       </div>
       <div class="col-span-3">
            <div class="my-2"><p>{user.userName}</p></div>
            <div class="my-2"><p>{user.userEmail}</p></div>
            <div class="my-2"><p>{user.message}</p></div>
       </div>
      </div>
    {/each} 
</div>
