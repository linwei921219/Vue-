// 数据绑定
let 标题模块 = new Vue({
	el: "#标题模块",
	data: {
		标题内容: "Hello World!"
	}
})

// if和循环
let 获奖列表模块 = new Vue({
	el: ".获奖列表模块",
	data: {
		显示0: true,
		显示1: false,
		获奖名单:[
			{
				name: "小智",
				age: "16"
			},
			{
				name: "小茂",
				age: "17"
			}
		]
	}
})

// 循环对象
let myFor = new Vue({
	el: "#myFor",
	data: {
		games:{
			title: "怪物猎人",
			price: 8980,
			date: "2018年1月26日"
		}
	}
})

// 文本框双向绑定
let myInput = new Vue({
	el: "#myInput",
	data: {
		game: "怪物猎人"
	}
})

// 复选框绑定
let myCheckbox = new Vue({
	el: "#myCheckbox",
	data: {
		game: []
	}
})

// 单选框绑定
let myRadio = new Vue({
	el: "#myRadio",
	data: {
		likeGame: null,
		dislikeGame: null
	}
})

// 单选&多选列表绑定
let mySelect = new Vue({
	el: "#mySelect",
	data: {
		likeWeapon: null,
		likeWeapons: []
	}
})

// 修饰符
// .number 限定数据为数字型防止数据返回成字符串型
// .lazy 由实时同步数据变为onChange后同步绑定的数据(提升性能)
// .trim 过滤输入的数据中头尾的空格

// 事件属性(要有一定的触发条件才会执行，如点击事件)
let myButton = new Vue({
	el: "#myButton",
	data: {
		game: "怪物猎人"
	},
	methods: {
		clickGame: function(text) {
			console.log(text);
			this.game = text
		}
	}
})

// 过滤器/数据处理函数(通常用于格式化数据)
let myFilters = new Vue({
	el: "#myFilters",
	data: {
		message: "abc",
		num: "0.2"
	},
	filters: {
		doUpper: function(val) {
			return val.toUpperCase()
		},
		doPercentage: function(num) {
			return (num * 100 + "%")
		}
	}
})

// 计算属性(DOM加载后马上执行并且实时监听，如初始赋值或数据计算绑定)
let myComputed = new Vue({
	el: "#myComputed",
	data: {
		price: 29980
	},
	computed: {
		priceInTax: function() {
			return this.price * (1 + 0.08)
		}
	},
	methods: {
		clickAdd: function(val) {
			this.price = this.price + val
		}
	}
})

// 计算逆设定属性(计算属性是getter，逆设定是setter)
let mySetter = new Vue({
	el: "#mySetter",
	data: {
		price: 29980
	},
	computed: {
		priceInTax: {
			get: function() {
				let newVal = this.price * (1 + 0.08)
				// console.log("触发getter，" + newVal);
				return newVal
			},
			set: function(val) {
				// setter可以取到当前被改变设定的值,从而逆推回去改变其他相关数据
				this.price = val / (1 + 0.08)
			}
		}
	},
	methods: {
		clickChange: function(val) {
			this.priceInTax = val
		}
	}
})

// 观察属性(onchange数据监听，只有在触发条件时监听)
let myWatch = new Vue({
	el: "#myWatch",
	data: {
		price: 29980
	},
	computed: {
		priceInTax: function() {
			return this.price * (1 + 0.08)
		}
	},
	watch: {
		price: function(newVal, oldVal) {
			console.log(newVal, oldVal);
			this.priceInTax = this.price * (1 + 0.08)
		}
	},
	methods: {
		clickAdd: function(val) {
			this.price = this.price + val
		}
	}
})

// Class绑定
let myClass = new Vue({
	el: "#myClass",
	data: {
		classObject0: {
			blue: true,
			red: false
		},
		classObject1: {
			blue: false,
			red: true
		}
	},
	methods: {
		clickAct: function() {
			this.classObject0.blue = !this.classObject0.blue
			this.classObject0.red = !this.classObject0.red
			this.classObject1.blue = !this.classObject1.blue
			this.classObject1.red = !this.classObject1.red
		}
	}
})

// 条件渲染
let myIf = new Vue({
	el: "#myIf",
	data: {
		result: null
	},
	methods: {
		clickResult: function() {
			this.result = Math.round(Math.random() * 100)
		}
	}
})

// 注册组件
// 注意必须使用 Prop 向组件内部传递数据(v-bind)
// 注意确保在初始化根实例(new Vue)之前注册组件，即注册组件必须放在定义实例(new Vue)之前

// // 全局注册：
// // ↓ 注册组件步骤
// Vue.component("game-item", {
// 	// 定义属性props
// 	props: [ "item" ],
// 	// 定义模板template
// 	template: "<li>{{ item.title }}</li>"
// })
// // ↓ 定义实例步骤
// let myComponent = new Vue({
// 	el: "#myComponent",
// 	data: {
// 		games:[
// 			{title: "怪物猎人"},
// 			{title: "精灵宝可梦"},
// 			{title: "超级马里奥"}
// 		]
// 	}
// })

// 局部注册，只在父组件实例(new Vue)中可用：
let com = {
	props: [ "item" ],
	template: "<li>{{ item.title }}</li>"
}
let myComponent = new Vue({
	el: "#myComponent",
	data: {
		games:[
			{title: "怪物猎人"},
			{title: "精灵宝可梦"},
			{title: "超级马里奥"}
		]
	},
	components: {
		"game-item": com
	}
})

// 组件:表行(is属性)
Vue.component("my-row1", {
	template: "<tr><td>001</td><td>尊者高达</td></tr>"
})
let myTable = new Vue({
	el: "#myTable",
	data: {},
	methods: {}
})

// 组件:数据函数(组件的data必须是函数)
Vue.component("weather", {
	template: "<strong>{{ weatherData }}</strong>",
	data: function() {
		return {
			weatherData: "大暴雨"
		}
	}
})
let myVal = new Vue({
	el: "#myVal"
})

// 组件:传递数据
Vue.component("get-weather", {
	props: ["val"],
	template: "<p>参数{{ val }}, 结果{{ getWeather }}</p>",
	computed: {
		getWeather: function() {
			console.log(this.val);
			let weather = ""
			if (this.val == 0) {
				weather = "晴天"
			} else {
				weather = "气候异常"
			}
			return weather
		}
	}
})
let myProps = new Vue({
	el: "#myProps"
})

// 组件：传递变量
Vue.component("say-hello",{
	props: ["name"],
	template: "<p>您好，{{ name }}！</p>",
})
let myPropsData = new Vue({
	el: "#myPropsData",
	data: {
		val: "LW"
	}
})

// 组件：参数验证
Vue.component("say-hello",{
	props: {
		// // 基础类型检测 （`null` 意思是任何类型都可以）
		// propA: String,
		// // 多种类型
		// propB: [String, Number],
		// // 必传且是字符串
		// propC: {
		// 	type: String,
		// 	required: true
		// },
		// // 数字，有默认值
		// propD: {
		// 	type: Number,
		// 	default: 100
		// },
		// // 数组／对象的默认值应当由一个工厂函数返回
		// propE: {
		// 	type: Object,
		// 	default: function () {
		// 		return { message: 'hello' }
		// 	}
		// },
		// // 自定义验证函数
		// propF: {
		// 	validator: function (value) {
		// 		return value > 10
		// 	}
		// },
		name: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			validator: function (value) {
				return value >= 18
			},
		},
		address: {
			type: String,
			default: "US"
		},
	},
	template: "<div>姓名: {{ name }}<br>年龄: {{ age }}<br>地址: {{ address }}<br></div>",
})
let myValidation = new Vue({
	el: "#myValidation",
	data: {
		whatName: "Mike",
		howAge: 16,
		whereAddress: "CN",
	}
})

// 组件：事件冒泡传递
Vue.component("add-emit",{
	props: ["a", "b"],
	template: "<div><button v-on:click='add'>相加</button></div>",
	methods: {
		add: function() {
			var val = 0
			val = this.a + this.b
			this.$emit("add_event", {
				result: val
			})
		}
	}
})
let myEmit = new Vue({
	el: "#myEmit",
	data: {
		result: 0
	},
	methods: {
		getAddRes: function(index) {
			this.result = index.result
		}
	}
})

// Slot插槽
// <slot></slot>用于传入组件中标签内部的内容
Vue.component("say-to",{
	props: ["pname"],
	template: "<div>"
	+ "你好，{{ pname }}" 
	+ "<slot></slot>"
	+ "<slot name='a'></slot>"
	+ "<slot name='b'></slot>"
	+ "</div>",
})
let mySlot = new Vue({
	el: "#mySlot",
})
