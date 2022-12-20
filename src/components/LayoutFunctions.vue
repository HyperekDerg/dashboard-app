<template>
    <div class="bg-secondary rounded-lg shadow-lg py-6 px-4">
    <h2 class="font-medium text-font-color text-lg px-2 py-4">CLIENT SIDE CONFIGURATION</h2>
        <div class="bg-primary p-6 rounded-lg">
            <!-- First -->
            <div class="grid overflow-hidden grid-cols-1 md:grid-cols-2 grid-rows-1 gap-2 font-bold border-y-2 border-secondary py-4">
                <p class="text-secondary px-2 py-5">SHOW API STATUS</p>
                <div class="flex justify-center items-center">
                    <label for="API" class="inline-flex p-1 cursor-pointer">
                        <input id="API" type="checkbox" class="hidden peer">
                        <span class="px-8 py-2 rounded-l-lg bg-secondary peer-checked:bg-white transition delay-50">OFF</span>
                        <span class="px-8 py-2 rounded-r-lg bg-white peer-checked:bg-secondary">ON</span>
                    </label>
                </div>
            </div>
            <!-- Secound -->
            <div class="grid overflow-hidden grid-cols-1 md:grid-cols-2 grid-rows-1 gap-2 font-bold border-b-2 border-secondary py-4">
                <p class="text-secondary px-2 py-5">SHOW RELOAD BUTTON</p>
                <div class="flex justify-center items-center">
                    <label for="RELOAD" class="inline-flex p-1 cursor-pointer">
                        <input id="RELOAD" type="checkbox" class="hidden peer">
                        <span class="px-8 py-2 rounded-l-lg bg-secondary peer-checked:bg-white transition delay-50">OFF</span>
                        <span class="px-8 py-2 rounded-r-lg bg-white peer-checked:bg-secondary">ON</span>
                    </label>
                </div>
            </div>
            <!-- Third -->
            <div class="grid overflow-hidden grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-1 gap-2 font-bold border-b-2 border-secondary py-4">
                <p class="text-secondary px-2 py-5">SHOW BOARD MESSAGE</p>
                <div class="flex justify-center items-center">
                    <label for="MESSAGE" class="inline-flex p-1 cursor-pointer">
                        <input id="MESSAGE" type="checkbox" class="hidden peer">
                        <span class="px-8 py-2 rounded-l-lg bg-secondary peer-checked:bg-white transition delay-50">OFF</span>
                        <span class="px-8 py-2 rounded-r-lg bg-white peer-checked:bg-secondary">ON</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="grid overflow-hidden grid-cols-1 grid-rows-1 font-bold py-4">
            <input type="submit" value="SAVE OPTIONS" class="rounded bg-button hover:bg-button-hover text-secondary p-4 cursor-pointer">
        </div>
    </div>
</template>