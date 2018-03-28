<style lang="less" src="./index.less" scoped></style>
<template>
    <div class="calendar">
        <div class="title">
            <button @click="jump2lastYear">上一年</button>
            <button @click="jump2lastMonth">上一月</button>
            <span>{{calendarDetail.title}}</span>
            <button @click="jump2nextMonth">下一月</button>
            <button @click="jump2nextYear">下一年</button>
        </div>
        <div>
            <span class="calendar-item" v-for="week in calendarDetail.week">
                {{week}}
            </span>
            <button 
            :class="{
                'calendar-item': true,
                'choosed': date === calendarDetail.choosed,
                'today': date === today,
                'notThisMonth': date.slice(0, 7) !== calendarDetail.choosed.slice(0, 7)
            }"
            @click="choose(date)"
            v-for="date in calendarDetail.body">
                {{date | formatDate}}
            </button>
        </div>
        <button @click="jump2today" class="title" style="margin-top: 1rem;">跳转到今天</button>
    </div>
</template>
<script>
import calendar from './calendar.js'
export default {
    name: 'DatePicker',
    filters: {
        formatDate: function(date) {
            return parseInt(date.slice(8, 10), 10)
        }
    },
    data() {
        return {
            calendarDetail: {},
            today: null
        }
    },
    watch: {
        'calendarDetail': function(val) {
            this.$emit('click', val.choosed)
        }
    },
    methods: {
        choose(date) {
            if(date === this.calendarDetail.choosed) return;
            this.calendarDetail = calendar._pageCanlender(date)
        },
        jump2lastYear() {
            this.calendarDetail = calendar._pageCanlender(this.calendarDetail.lastYear)
        },
        jump2nextYear() {
            this.calendarDetail = calendar._pageCanlender(this.calendarDetail.nextYear)
        },
        jump2lastMonth() {
            this.calendarDetail = calendar._pageCanlender(this.calendarDetail.lastDay)
        },
        jump2nextMonth() {
            this.calendarDetail = calendar._pageCanlender(this.calendarDetail.nextDay)
        },
        jump2today() {
            this.calendarDetail = calendar._pageCanlender(this.today)
        }
    },
    mounted() {
        this.calendarDetail = calendar._pageCanlender()
        this.today = this.calendarDetail.someday.$formatTime()
    }
}
</script>