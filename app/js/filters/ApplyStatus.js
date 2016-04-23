/**
 * Created by yang on 2016/3/25.
 */
export default () => {
    return (apply) => {
        if (apply.applyStatus == '1') {
            return '已处理';
        }
        return '等待处理';
    }
}
