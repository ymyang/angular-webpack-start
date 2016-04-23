/**
 * Created by yang on 2016/3/25.
 */

export default () => {
    return (activity) => {
        if (activity.used) {
            return '已使用';
        }
        return '未使用';
    }
}
