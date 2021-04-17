/**************************
  COUNTDOWN COMPONENT
 **************************/
Vue.component('countdown', {
  template: `
  <section class="countdown">
    
    <div v-show="!expired" class="timer">
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.days }}</p>
        <p class="label">Дни</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.hours }}</p>
        <p class="label">Часы</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.minutes }}</p>
        <p class="label">Минуты</p>
      </div>
      <div class="box">
        <div class="spacer"></div>
        <p class="value">{{ theTime.seconds }}</p>
        <p class="label">Секунды</p>
      </div>

    </div>

    <div v-show="expired" class="expired-timer timer">
      <div class="box">
        <div class="spacer"></div>
        <p class="value">It's the great day</p>
        <p class="label">I'll have you in my arms</p>
      </div>
    </div>
   
  </section>
`,

  data() {
    return {
      deadline: 'May 5, 2021 20:45:00',
      days: 'ПР',
      hours: 'ИВ',
      minutes: 'ЕТ',
      seconds: '!!!',
      expired: false
    };
  },

  computed: {
    theTime() {
      var ctx = this;

      // Countdown loop    
      var x = setInterval(function () {

        // Difference between the 2 dates
        var countDownDate = new Date(ctx.deadline).getTime(),
          now = new Date().getTime(),
          diff = countDownDate - now,

          // Time conversion to days, hours, minutes and seconds
          tdays = Math.floor(diff / (1000 * 60 * 60 * 24)),
          thours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          tminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          tseconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Keep 2 digits
        ctx.days = (tdays < 10) ? '0' + tdays : tdays;
        ctx.hours = (thours < 10) ? '0' + thours : thours;
        ctx.minutes = (tminutes < 10) ? '0' + tminutes : tminutes;
        ctx.seconds = (tseconds < 10) ? '0' + tseconds : tseconds;

        // Check for time expiration
        if (diff < 0) {
          clearInterval(x);
          ctx.expired = true;
        }
      }, 1000);

      // Return data
      return {
        days: ctx.days,
        hours: ctx.hours,
        minutes: ctx.minutes,
        seconds: ctx.seconds
      };
    }
  }
});



/**************************
  ROOT COMPONENT
 **************************/
var app = new Vue({
  el: '#app'
});