<template>
    <v-card variant="tonal">
        <template v-slot:title>
            SF2000 Menu Music disabler
        </template>
        <template v-slot:text>
            <p>A lot of folks, including me, find the inbuilt menu music annoying. Currently there's no way to disable it from the software of the SF2000. At the same time parts of the system's OS are reverse engineered, thus allowing us to do such modifications.</p>
            <v-spacer/>
            <br />
            <p>To disable the menu music:</p>

            <v-list lines="two">
                <v-list-item>
                    <template v-slot:title>- backup the file containing the original menu music from your SD card</template>
                    <template v-slot:subtitle>eg. F:/Resources/pagefile.sys</template>
                </v-list-item>
                <v-list-item>
                    <template v-slot:title>- <v-btn text="Download" href="https://github.com/tzubertowski/sf2000-utilities/releases/download/sf2000/datafrog-sf2000-remove-music.zip"></v-btn> the substitution file</template>
                    <template v-slot:subtitle>This is an empty pagefile.sys file, only containing mandatory file headers</template>
                </v-list-item>
                <v-list-item>
                    <template v-slot:title>- unzip it and copy "pagefile.sys" into your SD</template>
                    <template v-slot:subtitle>eg. F:/Resources/pagefile.sys</template>
                </v-list-item>
                <v-list-item>
                    <template v-slot:title>- replace the original file when asked for it</template>
                    <template v-slot:subtitle>eg. F:/Resources/pagefile.sys</template>
                </v-list-item>
            </v-list>

            <p>Insert the SD card back into the device, turn it on and notice the music no longer plays in the menu.</p>
        </template>
    </v-card>
</template>

<script>
export default {
    
}
</script>