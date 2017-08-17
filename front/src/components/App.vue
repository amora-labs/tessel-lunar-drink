<style lang="sass">
    @import ../sass/app

    #home
        +flex(row, n, center, center)
        position: absolute
        height: 100%
        width: 100%
        color: darken($color3, 20%)
        +dont-select

        > .drinks
            +flex(row, w, center, center)
            height: $pixel-proportion * 75
            width: $pixel-proportion * 73.5

            > .drink,
            > .big
                position: absolute
                background-color: $white
                border-radius: 50%
                +transition(.2s)

            > .drink
                z-index: 8
                height: $pixel-proportion * 16
                width: $pixel-proportion * 16
                border-style: solid
                border-width: 0
                border-color: $white
                font-size: 30px
                text-align: center
                line-height: 25px
                +flex(row, n, center, center)
                +cursor-pointer

                &:hover
                    transform: scale(1.3)
                    border-style: solid

                > .internal
                    margin-top: $pixel-proportion / 2
                    z-index: 9

                    > .time
                        font-size: 20px
                        margin-top: $pixel-proportion * -.3

                > .fa
                    position: absolute
                    z-index: 4
                    font-size: 185px
                    color: $white
                    top: $pixel-proportion * -3.5
                    left: $pixel-proportion * -6.9
                    +transition(.2s)

            > .mini
                font-size: 23px
                line-height: 22px

            > .large
                font-size: 40px
                line-height: 30px

            > .big
                z-index: 5
                height: $pixel-proportion * 32
                width: $pixel-proportion * 32

                &::before
                    height: $pixel-proportion * 40
                    width: $pixel-proportion * 40
                    border: 1px solid $white
                    border-radius: 50%
                    content: ''
                    position: absolute
                    top: $pixel-proportion * -4
                    left: $pixel-proportion * -4

                &::after
                    height: $pixel-proportion * 4
                    width: $pixel-proportion * 4
                    border-radius: 50%
                    background-color: $white
                    content: ''
                    position: absolute
                    top: $pixel-proportion * -6
                    left: $pixel-proportion * 14
                    box-shadow: 0 0 0 2px $white

            > .big.slow
                +animation(spin, 20024ms, linear, 0, infinite, normal, running)

                &::after
                    +animation(colors, 20024ms, linear, 0, infinite, normal, running)

            > .big.fast
                +animation(spin, 1024ms, ease-in-out, 0, infinite, normal, running)

                &::after
                    +animation(colors, 1024ms, ease-in-out, 0, infinite, normal, running)

            > .margin
                margin: $pixel-proportion * 10

            > .hidden
                display: none !important

            > .disabled
                opacity: .3

            > .color1:hover,
            > .color2:hover,
            > .color3:hover,
            > .color4:hover
                color: $white

            > .color1:hover
                border-color: $color1
                box-shadow: 0 0 0 15px $color1, 0 0 0 17px $white, 0 0 50px 10px $color1
                background-color: darken($color1, 30%)

                > .fa
                    color: darken($color1, 30%)

            > .color2:hover
                border-color: $color2
                box-shadow: 0 0 0 15px $color2, 0 0 0 17px $white, 0 0 50px 10px $color2
                background-color: darken($color2, 20%)

                > .fa
                    color: darken($color2, 20%)

            > .color3:hover
                border-color: $color4
                box-shadow: 0 0 0 15px $color4, 0 0 0 17px $white, 0 0 50px 10px $color4
                background-color: darken($color4, 20%)

                > .fa
                    color: darken($color4, 20%)

            > .color4:hover
                border-color: $color5
                box-shadow: 0 0 0 15px $color5, 0 0 0 17px $white, 0 0 50px 10px $color5
                background-color: darken($color5, 60%)

                > .fa
                    color: darken($color5, 60%)

    @media only screen and (max-width: 640px)
        .amora
            position: absolute
            bottom: $pixel-proportion * 4
            margin-left: auto
            margin-right: auto
            height: $pixel-proportion * 8
            width: $pixel-proportion * 16

        .name
            margin-top: $pixel-proportion * -10
            position: absolute
            z-index: 9
            text-align: center
            font-size: 60px
            line-height: 50px
            transform: scale(.8)

        .drinks
            margin-top: $pixel-proportion * -10
            transform: scale(.7)

            > .top
                right: $pixel-proportion * -4
                top: $pixel-proportion * 2

            > .bottom
                left: $pixel-proportion * -4
                bottom: $pixel-proportion * 2

            > .left
                left: $pixel-proportion * -4
                top: $pixel-proportion * 2

            > .right
                right: $pixel-proportion * -4
                bottom: $pixel-proportion * 2

    @media only screen and (min-width: 1025px)
        .amora
            position: absolute
            bottom: $pixel-proportion * 4
            right: $pixel-proportion * 4
            height: $pixel-proportion * 8
            width: $pixel-proportion * 16

        .name
            position: absolute
            z-index: 9
            text-align: center
            font-size: 60px
            line-height: 50px

        .top
            top: $pixel-proportion * -3

        .bottom
            bottom: $pixel-proportion * -3

        .left
            left: $pixel-proportion * -4

        .right
            right: $pixel-proportion * -4


    @keyframes spin
        from
            transform: rotate(0deg)
        to
            transform: rotate(360deg)

    @keyframes colors
        0%
            background-color: $color2
        25%
            background-color: $color1
        50%
            background-color: $color4
        75%
            background-color: $color5
        100%
            background-color: $color2
</style>

<template lang="pug">
    #home
        .amora
            img(src="static/img/logo.svg")

        .name
            | lunar
            br
            | drink

        .drinks
            .drink.top.color2.large(
                :class="{ 'disabled' : active != 'maitai' && active != '' }",
                @click="myDrink('maitai')")
                .internal
                    | mai
                    br
                    | tai
                    .time(v-if="active == 'maitai'") {{time}}
                i.fa.fa-cog.fa-spin.fa-3x.fa-fw(v-if="active == 'maitai'")
            .drink.left.color4.large(
                :class="{ 'disabled' : active != 'hifi' && active != '' }",
                @click="myDrink('hifi')")
                .internal
                    | hi
                    br
                    | fI
                    .time(v-if="active == 'hifi'") {{time}}
                i.fa.fa-cog.fa-spin.fa-3x.fa-fw(v-if="active == 'hifi'")

            .big(:class="{ 'fast' : active != '', 'slow' : active == '' }")

            .drink.right.color1(
                :class="{ 'disabled' : active != 'cubalibre' && active != '' }",
                @click="myDrink('cubalibre')")
                .internal
                    | cuba
                    br
                    | libre
                    .time(v-if="active == 'cubalibre'") {{time}}
                i.fa.fa-cog.fa-spin.fa-3x.fa-fw(v-if="active == 'cubalibre'")
            .drink.bottom.color3.mini(
                :class="{ 'disabled' : active != 'moskvasvobodno' && active != '' }",
                @click="myDrink('moskvasvobodno')")
                .internal
                    | moskva
                    br
                    | svobodno
                    .time(v-if="active == 'moskvasvobodno'") {{time}}
                i.fa.fa-cog.fa-spin.fa-3x.fa-fw(v-if="active == 'moskvasvobodno'")
</template>

<script>
    import { mapState, mapGetters, mapMutations } from 'vuex'
    import { makeDrink } from '../axios/drinks'

    export default {
        props: [],
        data: () => ({
            active: '',
            time: '',
            timer: ''
        }),
        created: function () {},
        mounted: function () {},
        updated: function () {},
        destroyed: function () {},
        components: {},
        computed: {
            ...mapGetters([]),
            ...mapState({})
        },
        methods: {
            ...mapMutations([]),
            myDrink (drink) {
                // this.active = drink
                // this.calcTime(5)
                if (drink && this.active === '') {
                    console.log('making drink', drink)
                    this.active = drink
                    makeDrink(drink)
                    .then(data => {
                        this.calcTime(data.time)
                    })
                }
                //
                // }
            },
            calcTime (time) {
                this.time = ''
                clearTimeout(this.timer)
                this.timer = setInterval(() => {
                    const hrs = ~~(time / 3600)
                    const mins = ~~((time % 3600) / 60)
                    const secs = time % 60

                    let ret = ''

                    if (hrs > 0) {
                        ret += `${hrs}:`
                    }

                    ret += (mins < 10
                        ? `0${mins}`
                        : `${mins}`) + ':' + (secs < 10
                            ? `0${secs}`
                            : `${secs}`)

                    --time

                    this.time = ret

                    if (ret === '00:00') {
                        this.active = ''
                        this.time = ''
                        clearTimeout(this.timer)
                    }
                }, 1000)
            }
        },
        filters: {},
        watch: {}
    }
</script>
