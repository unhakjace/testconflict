<template>

    <div @click="up">
        <p @click="up">
            <button v-on:click="down">하위</button>
        </p>
    </div>
    <ul class="accordion">
                                <span class="target" id="accordion"></span>
                                <li class="accordion__li">
                                    <span class="target" id="accordion1"></span>

                                    <a href="#accordion1" class="open-accordion" title="open">
                                    <div>
                                        <div>
                                        <span class="accordion__num">01</span>
                                        <h5 class="accordion__title">
                                            Non consectetur a erat nam at lectus urna duis?
                                        </h5>
                                        </div>
                                        <i class="fas fa-chevron-down"></i>
                                    </div>
                                    </a>

                                    <a href="#accordion" class="close-accordion" title="close">
                                    <div>
                                        <div>
                                        <span class="accordion__num">01</span>
                                        <h5 class="accordion__title">
                                            Non consectetur a erat nam at lectus urna duis?
                                        </h5>
                                        </div>
                                        <i class="fas fa-chevron-up"></i>
                                    </div>
                                    </a>

                                    <p class="accordion__content">
                                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                                    volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna
                                    fringilla urna porttitor rhoncus dolor purus non.
                                    </p>
                                    <p class="accordion__content">
                                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                                    volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna
                                    fringilla urna porttitor rhoncus dolor purus non.
                                    </p>
                                    <p class="accordion__content">
                                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                                    volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna
                                    fringilla urna porttitor rhoncus dolor purus non.
                                    </p>
                                    <p class="accordion__content">
                                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                                    volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna
                                    fringilla urna porttitor rhoncus dolor purus non.
                                    </p>
                                    <p class="accordion__content">
                                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                                    volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna
                                    fringilla urna porttitor rhoncus dolor purus non.
                                    </p>
                                </li>
                                <li class="accordion__li">
                                    <span class="target" id="accordion2"></span>
                                    <a href="#accordion2" class="open-accordion" title="open">
                                    <div>
                                        <div>
                                        <span class="accordion__num">02</span>
                                        <h5 class="accordion__title">
                                            Feugiat scelerisque varius morbi enim nunc?
                                        </h5>
                                        </div>
                                        <i class="fas fa-chevron-down"></i>
                                    </div>
                                    </a>
                                    <a href="#accordion" class="close-accordion" title="close">
                                    <div>
                                        <div>
                                        <span class="accordion__num">02</span>
                                        <h5 class="accordion__title">
                                            Feugiat scelerisque varius morbi enim nunc?
                                        </h5>
                                        </div>
                                        <i class="fas fa-chevron-up"></i>
                                    </div>
                                    </a>
                                    <p class="accordion__content">
                                    Dolor sit amet consectetur adipiscing elit pellentesque habitant
                                    morbi. Id interdum velit laoreet id donec ultrices. Fringilla
                                    phasellus faucibus scelerisque eleifend donec pretium. Est
                                    pellentesque elit ullamcorper dignissim. Mauris ultrices eros in
                                    cursus turpis massa tincidunt dui.
                                    </p>
                                </li>
                                <li class="accordion__li">
                                    <span class="target" id="accordion3"></span>
                                    <a href="#accordion3" class="open-accordion" title="open">
                                    <div>
                                        <div>
                                        <span class="accordion__num">03</span>
                                        <h5 class="accordion__title">
                                            Dolor sit amet consectetur adipiscing elit?
                                        </h5>
                                        </div>
                                        <i class="fas fa-chevron-down"></i>
                                    </div>
                                    </a>
                                    <a href="#accordion" class="close-accordion" title="close">
                                    <div>
                                        <div>
                                        <span class="accordion__num">03</span>
                                        <h5 class="accordion__title">
                                            Dolor sit amet consectetur adipiscing elit?
                                        </h5>
                                        </div>
                                        <i class="fas fa-chevron-up"></i>
                                    </div>
                                    </a>
                                    <p class="accordion__content">
                                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis
                                    orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra
                                    diam sit amet nisl suscipit. Rutrum tellus pellentesque eu
                                    tincidunt. Lectus urna duis convallis convallis tellus. Urna
                                    molestie at elementum eu facilisis sed odio morbi quis
                                    </p>
                                </li>
                                </ul>
</template>

<script setup>
    const up = function a()  {
      console.log("상위 이벤트")
    }

    const down = function b()  {
      console.log("하위 이벤트")
    }
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
}
.target {
  display: block;
  top: 0;
  left: 0;
  position: fixed;
}
.open-accordion {
  display: block;
}
.close-accordion {
  display: none;
}
:target ~ .open-accordion {
  display: none;
}
:target ~ .close-accordion {
  display: block;
}


.accordion__li {
  width: 45rem;
  background: white;
  border-radius: 0.4rem;
  padding: 2rem;
}

.accordion__li a > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.accordion__li a > div div {
  display: flex;
  align-items: center;
}
.accordion__num {
  font-size: 1.8rem;
  margin-right: 1.3rem;
}
.accordion__title {
  font-size: 1.6rem;
}
.accordion__li i {
  font-size: 1.3rem;
  position: relative;
  top: 0.1rem;
  right: 0.5rem;
}

/* When accordion is open */

.accordion__content {
  font-size: 1.6rem;
  line-height: 1.5;
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
.accordion__li:first-of-type :target ~ .accordion__content {
  height: 8.2rem;
  padding-top: 1rem;
}
.accordion__li:nth-of-type(2) :target ~ .accordion__content {
  height: 13rem;
  padding-top: 1rem;
}
.accordion__li:last-child :target ~ .accordion__content {
  height: 15.4rem;
  padding-top: 1rem;
}
</style>