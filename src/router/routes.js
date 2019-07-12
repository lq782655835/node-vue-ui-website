const _import = file => require('@/pages/' + file + '.vue').default
const _md = file => require('@/pages/' + file + '.md').default

const routes = [
    {
        path: '/',
        redirect: '/components'
    },
    {
        path: '/components',
        component: _import('components'),
        children: [
            // { icon: 'grid.svg', name: '栅格', path: '/components/grid', component: _import('components/grid') },
            // { icon: 'layout.svg', name: '布局', path: '/components/layout', component: _import('components/layout') },
            { icon: 'theme.svg', name: '设计原则', path: '/components/design', component: _md('components/design') },
            { icon: 'color.svg', name: '色彩', path: '/components/color', component: _md('components/color') },
            { icon: 'layout.svg', name: '字体', path: '/components/font', component: _md('components/font') },
            // { icon: 'theme.svg', name: '定制主题', path: '/components/theme', component: _import('components/theme') },
            {
                icon: 'component.svg',
                name: '组件',
                path: '/components/unit',
                component: _import('components/unit'),
                children: [
                    // { name: 'Badge', path: '/components/unit/badge', component: _md('components/unit/badge') },
                    { name: 'Link', path: '/components/unit/link', component: _md('components/unit/link') },
                    { name: 'Button', path: '/components/unit/button', component: _md('components/unit/button') }
                    // { name: 'Input', path: '/components/unit/input', component: _md('components/unit/input') },
                    // { name: 'Select', path: '/components/unit/select', component: _md('components/unit/select') },
                    // { name: 'Table', path: '/components/unit/table', component: _md('components/unit/table') },
                    // { name: 'Modal', path: '/components/unit/modal', component: _md('components/unit/modal') },
                    // { name: 'Toast', path: '/components/unit/toast', component: _md('components/unit/toast') },
                    // { name: 'Form', path: '/components/unit/form', component: _md('components/unit/form') },
                    // { name: 'Radio', path: '/components/unit/radio', component: _md('components/unit/radio') },
                    // { name: 'Breadcrumb', path: '/components/unit/breadcrumb', component: _md('components/unit/breadcrumb') },
                    // { name: 'Steps', path: '/components/unit/steps', component: _md('components/unit/steps') },
                    // { name: 'ToolTip', path: '/components/unit/tooltip', component: _md('components/unit/tooltip') },
                    // { name: 'Capsules', path: '/components/unit/capsules', component: _md('components/unit/capsules') },
                    // { name: 'Sidebar', path: '/components/unit/sidebar', component: _md('components/unit/sidebar') },
                    // { name: 'Upload', path: '/components/unit/upload', component: _md('components/unit/upload') },
                    // { name: 'Progress', path: '/components/unit/progress', component: _md('components/unit/progress') }
                ]
            }
        ]
    },
    {
        path: '/question',
        component: _import('question'),
        children: [
            { icon: 'ques.svg', name: '常见问题', path: '/question/ques', component: _import('question/ques') },
            { icon: 'other.svg', name: '其它', path: '/question/other', component: _import('question/other') }
        ]
    },
    {
        path: '/guide',
        component: _import('guide')
    },
    {
        path: '/code',
        component: _import('code')
    },
    {
        path: '/article',
        component: _import('article/list')
    },
    {
        path: '/article/modify',
        component: _import('article/modify')
    },
    {
        path: '/article/demo',
        component: _import('article/demo')
    }
]

export default routes
