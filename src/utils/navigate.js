import { useRouter } from 'vue-router'

export function useNavigate() {
    const router = useRouter()

    /**
     * 通用跳转
     * @param {string|object} to 路径 or 路由对象
     * @param {object} options
     * @param {boolean} options.replace 是否 replace
     * @param {Function} options.before 跳转前钩子
     */
    const go = (to, options = {}) => {
        const {
            replace = false,
            before
        } = options

        // 跳转前统一处理
        if (before && before() === false) return

        if (replace) {
            router.replace(to)
        } else {
            router.push(to)
        }
    }

    return { go }
}
