### 真题
#### Map的妙用-两数求和问题
```
真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例: 给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
```
结论： 几乎所有的求和问题，都可以转化为求差问题
```
var twoSum = (nums, target) => {
    if (nums.length < 2) {
        return [];
    }
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i);
    }
    return [];
}
```
### 强大的双指针法 
* 空间换时间
* 降低问题的复杂度
#### 合并两个有序数组
```
const merge = function (nums1, m, nums2, n) {
    // 初始化两个指针的指向 初始化nums1尾部索引k
    let i = m - 1, j = n - 1, k = m + n - 1;
    // 当两个数组都没遍历完时，指针同步移动
    while (i >= 0 && j >=0 ) {
        if (nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i]
            i--
            k--
        } else {
            nums1[k] = nums2[j]
            j--
            k--
        }
    }
    // nums2留下的情况 特殊处理一下
    while (j >= 0) {
        nums1[k] = nums2[j]
        j--
        k--
    }
    return nums1
}
```
#### 三数求和-双指针法
求和问题变成求差问题

找到一个合适的数据结构

```
const threeSum = function (nums) {
    let res = [];
    let sum = 0;
    nums = nums.sort((a, b) => {
        return a - b;
    });
    const len = nums.length;
    for (let i = 0; i < len - 2; i++> {
        // 左指针 j
        let j = i + 1;
        // 右指针 k
        let k = len - 1;
        // 相同的数字 跳过
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
                while (j < k && nums[j] == nums[j - 1]) {
                    j++;
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
                while (j < k && nums[k] == nums[k + 1]) {
                    k--;
                }
            } else {
                res.push([i, j, k]);
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) {
                    j++;
                }
                while (j < k && nums[k] == nums[k + 1]) {
                    k--;
                }
            }
        }
    }
    return res;
}

```
#### 双指针法中的对撞指针法
左右指针一起从两边往中间位置相互迫近，这样特殊的双指针形态 称为对撞指针

有序和数组 双指针 -> 对撞指针

