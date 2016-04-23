/**
 * Created by yang on 2016/3/25.
 */

export default () => {
    return (activity) => {
        if (activity.expiryDate) {
            return activity.expiryDate;
        }
        return '激活后14天';
    }
}