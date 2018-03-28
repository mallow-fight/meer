const __basic__ = {
    $date: new Date(),
    $leapYear: [31,29,31,30,31,30,31,31,30,31,30,31],
    $commonYear: [31,28,31,30,31,30,31,31,30,31,30,31],
    $monthName: ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December'],
    $weekName: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    $isLeapYear: function isLeapYear(yearArg) {
        const year = yearArg || this.$year()
        return ( year % 4 === 0 && year % 100 !== 0 ) || year % 400 === 0
    },
    $someDay: function someday(date) {
        return this.$date = new Date(date)
    },
    $time: function time() {
        return this.$date.getTime()
    },
    $formatTime: function formatTime() {
        return `${this.$year()}-${this.$formatSmallNumber(this.$month())}-${this.$formatSmallNumber(this.$day())}`
    },
    $formatSmallNumber: function formatSmallNumber(number) {
        if(number >= 10) return number
        return `0${number}`
    },
    $year: function year() {
        return this.$date.getFullYear()
    },
    $month: function month() {
        return this.$date.getMonth() + 1
    },
    $day: function day() {
        return this.$date.getDate()
    },
    $week: function week() {
        return this.$date.getDay()
    },
    $Hours24: function Hours24() {
        return this.$date.getHours()
    },
    $Hours12: function Hours12() {
        const _24 = this.$Hours24()
        if(_24 > 12) return _24 - 12
        return _24
    },
    $minutes: function minutes() {
        return this.$date.getMinutes()
    },
    $seconds: function seconds() {
        return this.$date.getSeconds()
    },
    $nextMonth: function nextMonth() {
        return `${this.$year()}-${this.formatSmallNumber(this.$month + 1)}`
    },
    $aMonthDays: function aMonthDays(month) {
        const isLeap = this.$isLeapYear()
        return isLeap ? this.$leapYear[month] : this.$commonYear[month]
    },
    $monthFirstDayWeek: function monthFirstDayWeek() {
        return (new Date(`${this.$year()}-${this.$formatSmallNumber(this.$month())}-01`)).getDay()
    },
    $title: function title() {
        return `${this.$monthName[this.$month() - 1].slice(0, 3)} ${this.$year()}`
    },
    $formatWeek: function formatWeek() {
        return this.$weekName.map(name => {
            return name.slice(0, 3)
        })
    },
    $daysMap: function daysMap(days, year, month) {
        const arr = []
        for(let i = 1; i <= days; i++) {
            const date = `${year}-${month}-${this.$formatSmallNumber(i)}`
            arr.push(date)
        }
        return arr
    },
    $aroundMonthDays: function aroundMonthDays() {
        const monthIndex = this.$month() - 1
        let year = this.$year()
        let lastMonthIndex = monthIndex - 1
        let nextMonthIndex = monthIndex + 1
        if(lastMonthIndex < 0) {
            year--
            lastMonthIndex = 11
        }
        if(nextMonthIndex > 11) {
            year++
            nextMonthIndex = 0
        }
        const thisDay = this.$day()
        let lastDay = thisDay, nextDay = thisDay
        const lastMonthDays = this.$aMonthDays(lastMonthIndex)
        const thisMonthDays = this.$aMonthDays(monthIndex)
        const nextMonthDays = this.$aMonthDays(nextMonthIndex)
        const lastMonth = this.$formatSmallNumber(lastMonthIndex + 1)
        const thisMonth = this.$formatSmallNumber(monthIndex + 1)
        const nextMonth = this.$formatSmallNumber(nextMonthIndex + 1)
        if(thisDay > lastMonthDays) { lastDay = lastMonthDays }
        if(thisDay > nextMonthDays) { nextDay = nextMonthDays }
        return {
            lastMonth: {
                dayDate: `${year}-${lastMonth}-${lastDay}`,
                yearDate: `${year - 1}-${thisMonth}-${this.$handleFebrary(thisDay, thisMonth, year - 1)}`,
                days: lastMonthDays,
                map: this.$daysMap(lastMonthDays, year, lastMonth)
            },
            thisMonth: {
                dayDate: `${year}-${thisMonth}-${thisDay}`,
                days: thisMonthDays,
                firstDay: this.$monthFirstDayWeek(),
                map: this.$daysMap(thisMonthDays, year, thisMonth)
            },
            nextMonth: {
                dayDate: `${year}-${nextMonth}-${nextDay}`,
                yearDate: `${year + 1}-${thisMonth}-${this.$handleFebrary(thisDay, thisMonth, year + 1)}`,
                days: nextMonthDays,
                map: this.$daysMap(nextMonthDays, year, nextMonth)
            }
        }
    },
    $handleFebrary: function handleFebrary(day, month, year) {
        const leap = this.$isLeapYear(year)
        let monthMap = this.$commonYear
        if(leap) { monthMap = this.$leapYear }
        const monthIndex = parseInt(month, 10) - 1
        if(day > monthMap[monthIndex]) return monthMap[monthIndex]
        return day
    }
}
const _calendar = Object.create(null)
_calendar._pageCanlender = function pageCanlender(date) {
    const someday = Object.create(__basic__)
    if(date && date.length !== 0) { someday.$someDay(date) }
    const aroundMonthDays = someday.$aroundMonthDays()
    return {
        title: someday.$title(),
        week: someday.$formatWeek(),
        choosed: someday.$formatTime(),
        lastDay: aroundMonthDays.lastMonth.dayDate,
        nextDay: aroundMonthDays.nextMonth.dayDate,
        lastYear: aroundMonthDays.lastMonth.yearDate,
        nextYear: aroundMonthDays.nextMonth.yearDate,
        body: this._formatAroundMonthDays(aroundMonthDays),
        someday
    }
}
_calendar._formatAroundMonthDays = function formatAroundMonthDays(body) {
    const {lastMonth, thisMonth, nextMonth} = body
    const firstDay = thisMonth.firstDay
    const lastMonthMap = lastMonth.map
    const nextMonthMap = nextMonth.map
    const cutLastMonth = lastMonthMap.slice(lastMonthMap.length - firstDay, lastMonthMap.length)
    const cutNextMonth = nextMonthMap.slice(0, 42 - thisMonth.days - cutLastMonth.length)
    return cutLastMonth.concat(body.thisMonth.map).concat(cutNextMonth)
}
export default Object.create(_calendar)