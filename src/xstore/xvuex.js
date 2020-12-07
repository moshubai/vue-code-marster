let Vue;

class Store {
	constructor(options) {
		console.log(options);
		this._mutations = options.mutations
		this._actions = options.actions



		this.commit = this.commit.bind(this)
		this.dispatch = this.dispatch.bind(this)

		// 暴露api
		console.log(options.getters);
		this.getters = {}

		this._vm = new Vue({
			data: {
				$$state: options.state
			}
		})

	}
	get state() {
		console.log(this._vm,'_vm');
		return this._vm._data.$$state
	}

	set state(v) {
		console.error('please use replaceState to reset state');
	}

	commit(type, payload) {
		const entry = this._mutations[type]

		if (!entry) {
			console.error('unkwnow mutation type');
			return
		}

		entry(this.state, payload)
	}

	dispatch(type, payload) {
		const entry = this._actions[type]

		if (!entry) {
			console.error('unkwnow action type');
			return
		}

		entry(this, payload)
	}
}


function install(_Vue) {
	Vue = _Vue
	Vue.mixin({
		beforeCreate() {
			if (this.$options.store) {
				Vue.prototype.$store = this.$options.store
			}
		},
	})
}



export default { Store, install }