<script lang="ts">
    import suite from "../validation/suite";
    import classnames from "vest/classnames";
    import InputText from "../components/InputText.svelte";
    import InputArea from "../components/InputArea.svelte";
    import ButtonSubmit from "../components/ButtonSubmit.svelte";

    let formState : {username? : string, email? : string, message? : string} = {}; 
    let result = suite.get();
    const handleChange = (name) => {    
      result = suite(formState,name)
    };
    $: cn = classnames(result, {
        warning: "warning",
        invalid: "error",
        valid: "success"
    }); 
    $: disabled = !result.isValid();
    
</script>
<div class="grid md:grid-cols-2 md:gap:24 pt-6">
    <div class="bg-white rounded-lg shadow border border-gray-300 md:mx-5 md:mr-18 mx-3">
        <div class="px-6 py-6 lg:px-8">
              <form on:submit|preventDefault class="space-y-6"  action="#">

                <InputText
                    name="username"
                    label="Name"
                    placeholder="Name"
                    bind:value={formState.username}
                    onInput={handleChange}
                    messages={result.getErrors("username")}
                    validityclass={cn("username")}
                />

                <InputText
                    name="email"
                    label="Email"
                    placeholder="adam.smith@gmail.com"
                    bind:value={formState.email}
                    onInput={handleChange}
                    messages={[... result.getErrors("email")]}
                    validityclass={cn("email")}
                />

                <InputArea
                    name="message"
                    label="Message"
                    placeholder="message"
                    bind:value={formState.message}
                    onInput={handleChange}
                    messages={[... result.getErrors("message")]}
                    validityclass={cn("message")}
                />

                  <div class="flex items-center rounded-b">
                      <div class="ml-auto">
                        <ButtonSubmit {disabled}>Submit</ButtonSubmit>
                          <button type="reset"  class="mx-1 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Reset</button>
                      </div>
                  </div>
              </form>
        </div>
    </div>
    <div class="h-96 md:mt-0 mt-16">
        <!-- svelte-ignore a11y-missing-attribute -->
        <div>
            <div class="mapouter">
                <div class="gmap_canvas h-64 p-3 rounded-lg shadow border border-gray-300 mb-3">
                    <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=Binori B Square 1, 801, 8th floor, BRTS road, Ambli, Ahmedabad, Gujarat 380058&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
                </div>
                </div>
        </div>
        <div class="flex">
            <div class="mx-auto">
                <h3 class="text-xl font-medium leading-tight text-neutral-800 ">
                    Reach Out to Us
                </h3>
                <p>Binori B Square 1, </p>
                <p> 801, 8th floor, </p>
                <p> BRTS road, Ambli, </p>
                <p> Ahmedabad, Gujarat 380058</p>
            </div>
        </div>
    </div>
</div> 