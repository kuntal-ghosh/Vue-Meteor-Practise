<template>
  <div>
    <b-table striped hover :items="students" :fields="fields">
        
        <template #cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          Delete
        </b-button>
                <router-link :to="`/user/${row.item._id}`">
                    <b-button size="sm" >
                         Edit
                    </b-button>
                </router-link>
        
      </template>
    </b-table>
  </div>
</template>

<script>
//   export default {
//     data() {
//       return {
//         items: [
//           { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
//           { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
//           { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
//           { age: 38, first_name: 'Jami', last_name: 'Carney' }
//         ]
//       }
//     }

    
//   }

import {Students} from "../../api/students";
import { Meteor } from 'meteor/meteor';

export default {
     data() {
    return {
        fields: ['name', 'email', 'phone','date','subjects','actions'],

    };
  },
    meteor:{
        $subscribe: {
      // Subscribes to the 'threads' publication with no parameters
    //   students: []
    },
        students()
        {
            console.log("called");
            return Students.find({}).fetch();
        }
    },
        methods: {
      info(item, index, button) {
       
              Meteor.call("students.remove", item._id);

      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
}
</script>