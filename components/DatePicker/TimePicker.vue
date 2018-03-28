<style lang="less" src="./index.less" scoped></style>
<script>
import {createArr, formatSmallNumber} from '../common.js'
    export default {
        name: 'TimePicker',
        data() {
            return {
                hours: 23,
                minutes: 59,
                seconds: 59,
                hoursModel: '00',
                minutesModel: '00',
                secondsModel: '00'
            }
        },
        methods: {
            renderTime(h, times, key) {
                return createArr(0, times).map( _ => {
                    const fmt = formatSmallNumber(_)
                    let cls;
                    ;(key === '小时') && (cls = {choosedHour: this.hoursModel === fmt})
                    ;(key === '分') && (cls = {choosedMinute: this.minutesModel === fmt})
                    ;(key === '秒') && (cls = {choosedSecond: this.secondsModel === fmt})
                    return h(
                        'div',
                        {
                            class: cls,
                            on: {
                                click: (e) => {
                                    ;(key === '小时') && (this.hoursModel = fmt)
                                    ;(key === '分') && (this.minutesModel = fmt)
                                    ;(key === '秒') && (this.secondsModel = fmt)
                                }
                            }
                        },
                        [_]
                    )
                })
            }
        },
        render(h) {
            return h(
                'div',
                [{'小时': this.hours}, {'分': this.minutes}, {'秒': this.seconds}].map(time => {
                    const key = Object.keys(time)[0]
                    const value = Object.values(time)[0]
                    return h(
                        'div',
                        {
                            class: {
                                'time-select': true
                            }
                        },
                        [h('div', [key].concat(this.renderTime(h, value, key)))]
                    )
                }).concat([
                    h('button', {
                        style: {
                            display: 'block'
                        },
                        on: {
                            click: (e) => {
                                this.$emit('click', `${this.hoursModel}:${this.minutesModel}:${this.secondsModel}`)
                            }
                        }
                    }, ['确定']),
                ])
            )
        }
    }
</script>