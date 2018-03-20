<script>
    export default {
        name: 'Layout',
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            type: {
                // 上主下：topMainDown  上主侧下：topMainSideDown
                // 上侧主下：topSideMainDown  侧上主下：sideTopMainDown  
                type: String,
                default: 'topMainDown'
            }
        },
        methods: {
            _width(num) {
                return {width: num + '%'}
            },
            _renderChild(childs, h, state) {
                return childs.map(dir => {
                    return h(
                        'slot',
                        state[dir],
                        [this.$slots[dir]]
                    )
                })
            },
            renderTopMainDown(h) {
                const state = {
                    contain: {
                        style: this._width(100)
                    },
                    top: {
                        style: this._width(100),
                        attrs: {
                            name: 'top'
                        }
                    },
                    main: {
                        style: this._width(100),
                        attrs: {
                            name: 'main'
                        }
                    },
                    down: {
                        style: this._width(100),
                        attrs: {
                            name: 'down'
                        }
                    }
                }
                return h(
                    this.tag,
                    state.contain,
                    this._renderChild(['top', 'main', 'down'], h, state)
                )
            },
            renderTopMainSideDown(h) {
                const state = {
                    contain: {
                        style: this._width(100)
                    },
                    top: {
                        style: this._width(100),
                        attrs: {
                            name: 'top'
                        }
                    },
                    main: {
                        style: {
                            display: 'inline-block',
                            width: '75%'
                        },
                        attrs: {
                            name: 'main'
                        }
                    },
                    side: {
                        style: {
                            display: 'inline-block',
                            width: '25%'
                        },
                        attrs: {
                            name: 'side'
                        }
                    },
                    down: {
                        style: this._width(100),
                        attrs: {
                            name: 'down'
                        }
                    }
                }
                const renderChild = this._renderChild(['top', 'main', 'side', 'down'], h, state)
                return h(
                    this.tag,
                    state.contain,
                    renderChild
                )
            },
            renderTopSideMainDown(h) {
                const state = {
                    contain: {
                        style: this._width(100)
                    },
                    top: {
                        style: this._width(100),
                        attrs: {
                            name: 'top'
                        }
                    },
                    main: {
                        style: {
                            display: 'inline-block',
                            width: '75%'
                        },
                        attrs: {
                            name: 'main'
                        }
                    },
                    side: {
                        style: {
                            display: 'inline-block',
                            width: '25%'
                        },
                        attrs: {
                            name: 'side'
                        }
                    },
                    down: {
                        style: this._width(100),
                        attrs: {
                            name: 'down'
                        }
                    }
                }
                const renderChild = this._renderChild(['top', 'side', 'main', 'down'], h, state)
                return h(
                    this.tag,
                    state.contain,
                    renderChild
                )
            },
            renderSideTopMainDown(h) {
                const state = {
                    contain: {
                        style: this._width(100)
                    },
                    side: {
                        style: {
                            display: 'inline-block',
                            width: '25%',
                            height: '100%'
                        },
                        attrs: {
                            name: 'side'
                        }
                    },
                    top: {
                        style: this._width(75),
                        attrs: {
                            name: 'top'
                        }
                    },
                    main: {
                        style: this._width(75),
                        attrs: {
                            name: 'main'
                        }
                    },
                    down: {
                        style: this._width(100),
                        attrs: {
                            name: 'down'
                        }
                    }
                }
                return h(
                    this.tag,
                    state.contain,
                    [
                        h(
                            'slot',
                            state.side,
                            [this.$slots.side]
                        ),
                        h(
                            'div',
                            {
                                style: {
                                    display: 'inline-block',
                                    'vertical-align': 'top',
                                    width: '75%'
                                }
                            },[
                                h(
                                    'slot',
                                    state.top,
                                    [this.$slots.top]
                                ),
                                h(
                                    'slot',
                                    state.main,
                                    [this.$slots.main]
                                ),
                                h(
                                    'slot',
                                    state.down,
                                    [this.$slots.down]
                                )
                            ]
                        )
                    ]
                )
            }
        },
        render(h) {
            const type = this.type
            if (type === 'topMainDown') {
                return this.renderTopMainDown(h)
            }
            if (type === 'topMainSideDown') {
                return this.renderTopMainSideDown(h)
            }
            if (type === 'topSideMainDown') {
                return this.renderTopSideMainDown(h)
            }
            if (type === 'sideTopMainDown') {
                return this.renderSideTopMainDown(h)
            }
            return false
        }
    }
</script>
<style scoped>
    
</style>