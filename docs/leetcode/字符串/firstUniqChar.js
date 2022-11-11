// 剑指 Offer 50.第一个只出现一次的字符

// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
// 输入：s = "abaccdeff"
// 输出：'b'

// 输入：s = "" 
// 输出：' '

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    // 解法二
    let _map = new Map()
    for(let i=0; i<s.length; i++) {
        if(_map.has(s[i])) {
            _map.set(s[i], _map.get(s[i])+1)
        }else {
            _map.set(s[i], 1)
        }
    }
    for(let i=0; i<s.length; i++) { 
        if(_map.get(s[i]) === 1) {
            return s[i]
        }
    }
    return ' '

    // 解法一
    // if(!s.length) return ' '
    // let flag = true
    // while(s.length && flag) {
    //     if(s.indexOf(s[0]) !== s.lastIndexOf(s[0])) {
    //         const ch = eval('/'+s[0]+'/g')
    //         s = s.replace(ch, '')
    //         if(!s.length) return ' '
    //     }else {
    //         flag = false
    //         return s[0]
    //     }
    // }
};

console.log(firstUniqChar('abaccdeff'))
console.log(firstUniqChar(''))
console.log(firstUniqChar('cc'))

