<template>
    <div style="text-align: center;">
        <h1>Welcome to YooSchool</h1>
        
    </div>
</template>

<script>
import {Students} from "../../api/students"
export default {
     data() {
    return {};
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
    }
}
</script>

<style scoped>

</style>>

