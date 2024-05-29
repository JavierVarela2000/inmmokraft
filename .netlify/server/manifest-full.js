export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["appData.json","favicon.png","iconos/area-grey.svg","iconos/bath-grey.svg","iconos/bath-white.svg","iconos/bath.svg","iconos/bed-grey.svg","iconos/bed-white.svg","iconos/bed.svg","iconos/car-white.svg","iconos/car.svg","iconos/close.svg","iconos/delete.svg","iconos/edit.svg","iconos/family.png","iconos/garage-grey.svg","iconos/home.png","iconos/key-house.png","iconos/location.svg","iconos/Logo-blanco-transparente.png","iconos/logo.png","iconos/objetivo.png","iconos/pinMap.png","iconos/pinMap.svg","iconos/ruler-white.svg","iconos/ruler.svg","iconos/search-home.png","iconos/ubicaciones.png","images/img_header.jpg","images/mision.svg","images/vision.svg"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.D3aVVNjP.js","app":"_app/immutable/entry/app.Ceq3uv4i.js","imports":["_app/immutable/entry/start.D3aVVNjP.js","_app/immutable/chunks/entry.D2Evo9iy.js","_app/immutable/chunks/scheduler.DksGCXQy.js","_app/immutable/entry/app.Ceq3uv4i.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.DksGCXQy.js","_app/immutable/chunks/index.DKBdAzNE.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/account",
				pattern: /^\/account\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/dashboard/cantones",
				pattern: /^\/dashboard\/cantones\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/dashboard/cantones/insertar",
				pattern: /^\/dashboard\/cantones\/insertar\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/dashboard/cantones/[id]",
				pattern: /^\/dashboard\/cantones\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/dashboard/mision",
				pattern: /^\/dashboard\/mision\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/dashboard/parroquias",
				pattern: /^\/dashboard\/parroquias\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/dashboard/parroquias/insertar",
				pattern: /^\/dashboard\/parroquias\/insertar\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/dashboard/parroquias/[id]",
				pattern: /^\/dashboard\/parroquias\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/dashboard/propiedades",
				pattern: /^\/dashboard\/propiedades\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/dashboard/propiedades/insertar",
				pattern: /^\/dashboard\/propiedades\/insertar\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/dashboard/propiedades/[id]",
				pattern: /^\/dashboard\/propiedades\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/dashboard/provincias",
				pattern: /^\/dashboard\/provincias\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/dashboard/provincias/insertar",
				pattern: /^\/dashboard\/provincias\/insertar\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/dashboard/provincias/[id]",
				pattern: /^\/dashboard\/provincias\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/dashboard/vision",
				pattern: /^\/dashboard\/vision\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/nosotros",
				pattern: /^\/nosotros\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/propiedades/[page]",
				pattern: /^\/propiedades\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/propiedad/[id]",
				pattern: /^\/propiedad\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/requerimientos",
				pattern: /^\/requerimientos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
