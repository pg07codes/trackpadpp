<template>

    <div id="pad-arena" @mousedown="startDrag" @mousemove="doDrag">

    </div>

</template>

<script>


    export default {

        name: 'TouchPad',

        data(){
          return{
              x:'',
              y:'',
              dragging:false
          }
        },

        methods:{


          startDrag() {
              this.dragging = true;
              this.x = this.y = 0;
          },
          stopDrag() {
              this.dragging = false;
              this.x = this.y = '';
          },
          doDrag(event) {
              if (this.dragging) {
                  this.x = event.clientX;
                  this.y = event.clientY;
              }
          }

        },

        mounted() {
            window.addEventListener('mouseup', this.stopDrag);
        }

    }
</script>

<style scoped>

    #pad-arena{
        background-color: beige;
        height: inherit;
        width: inherit;
        margin:0;
        padding:0;
    }


</style>
