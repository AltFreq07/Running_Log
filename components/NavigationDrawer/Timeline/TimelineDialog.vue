<template>
  <v-dialog v-model="dialog" persistent max-width="400px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Generate Timeline {{ type }}</span>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" @submit.prevent="submit">
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <label>Data source:</label>
                <timeline-dialog-drop-down
                  :items="dateTimeColums"
                  v-model="datetimeSource"
                  label="Select Date Source*"
                  :error-messages="
                    $v.$dirty && !$v.datetimeSource.required
                      ? 'Date source is required'
                      : ''
                  "
                />
                <label>Timezone</label>
                <timeline-dialog-drop-down
                  :items="timeZoneList"
                  v-model="timezone"
                  label="Select timezone*"
                  :error-messages="
                    $v.$dirty && !$v.timezone.required
                      ? 'Timezone is required'
                      : ''
                  "
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <label>Text source:</label>
                <timeline-dialog-drop-down
                  :items="textColumns"
                  v-model="textSource"
                  label="Select Text Source*"
                  :error-messages="
                    $v.$dirty && !$v.textSource.required
                      ? 'Text source is required'
                      : ''
                  "
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <label>Important marker source:</label>
                <timeline-dialog-drop-down
                  :items="checkboxColumns"
                  v-model="importantSource"
                  label="Select Important Checkbox Source"
                  error="No checkbox columns on table"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <timeline-color-picker
                  label="Select Title Color"
                  v-model="titleColor"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <timeline-color-picker
                  label="Select Base Color"
                  v-model="baseColor"
                />
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <timeline-color-picker
                  label="Select Important Color"
                  v-model="importantColor"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
        <v-btn color="primary" text @click="generate()"> Generate </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import TimelineColorPicker from './TimelineColorPicker.vue'
import TimelineDialogDropDown from './TimelineDialogDropDown.vue'
export default {
  components: { TimelineDialogDropDown, TimelineColorPicker },
  props: {
    caseData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      type: '',
      dialog: false,
      titleColor: 'orange',
      baseColor: 'grey',
      importantColor: 'purple',
      datetimeSource: undefined,
      textSource: undefined,
      importantSource: undefined,
      submitStatus: null,
      timezone: undefined,
    }
  },
  validations: {
    datetimeSource: {
      required,
    },
    textSource: {
      required,
    },
    timezone: {
      required,
    },
  },
  methods: {
    generate() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$router.push({
          name: 'timeline',
          params: {
            caseID: this.caseData.id,
            caseTitle: this.caseData.title,
            type: this.type,
            timezone: this.timezone,
            data: this.caseData.data.map((item) => ({
              date: item[this.datetimeSource.value], //  command = user defined
              data: item[this.textSource.value],
              important:
                this.importantSource !== undefined
                  ? item[this.importantSource.value]
                  : false,
            })),
            titleColor: this.titleColor,
            baseColor: this.baseColor, // color = user defined
            importantColor: this.importantColor,
          },
        })
      }
    },
  },
  computed: {
    timeZoneList() {
      const list = []
      for (let i = -12; i < 14; i++) {
        list.push({
          value: i,
          name: i + ':00',
        })
      }
      return list
    },
    dateTimeColums() {
      return this.caseData.columns
        .filter((col) => col.type === 'DateTime')
        .map((col) => ({ name: col.text, value: col.value }))
    },
    textColumns() {
      return this.caseData.columns.map((col) => ({
        name: col.text,
        value: col.value,
      }))
    },
    checkboxColumns() {
      return this.caseData.columns
        .filter((col) => col.type === 'Checkbox')
        .map((col) => ({ name: col.text, value: col.value }))
    },
  },
}
</script>