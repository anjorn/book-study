const threeSum = function (nums, target) {
    if (nums.length < 3) {
        return []
    }
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        // 左指针
        let j = i + 1;
        // 右指针
        let k = nums.length - 1;
        
        if (i > 0 && nums[i] == nums[i - 1])  {
            continue;
        }

        while (j < k) {
            if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
            } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
                while (j < k && nums[k] === nums[k + 1]) {
                    k--;
                }
            } else {
                res.push(nums[i], nums[j], nums[k]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
                while (j < k && nums[k] === nums[k + 1]) {
                    k--;
                }
            }
        }
    }
    return res;
}

const validPalindrome = function (str) {
    let len = str.length;
    let i = 0;
    let j = len - 1;
    while (i < j && str[i] == str[j]) {
        i++;
        j--;
    }
    if (isPalindrome(i + 1, j)) {
        return true;
    }
    if (isPalindrome(i, j-1)) {
        return true;
    }
    function isPalindrome(st, ed) {
        while (st < ed) {
            if (str[st] != str[ed]) {
                return false;
            }
            st++;
            ed--
        }
        return true;
    }
    return false;
}

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    
};