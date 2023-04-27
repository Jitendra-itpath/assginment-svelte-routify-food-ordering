<script lang="ts">
    import { feedbackInfo } from '../stores/StoresData';
    import * as _ from 'lodash'
    
    $: feedbackData = $feedbackInfo;
    feedbackData = _.reverse( feedbackData )
</script>

<div class="md:mx-10 mx-2 md:pt-6 pt-2">
    <div class="overflow-x-auto shadow-md sm:rounded-lg ">
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
                                {user.userName}
                            </td>
                            <td data-th="Email" class="px-6 py-4">
                                {user.userEmail}
                            </td>
                            <td data-th="Message" class="px-6 py-4">
                                {user.message}
                            </td>
                        </tr>
                    {/each} 
                </tbody>
            </table>
        </div>
    </div>
</div>
