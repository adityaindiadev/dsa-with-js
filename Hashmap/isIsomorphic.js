// https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // return
    if (s.length != t.length) return false
    const stMap = new Map()
    const tSet = new Set()
    
    for(let i = 0; i<s.length; i++){
        if(stMap.has(s[i])){
            if(stMap.get(s[i]) != t[i]){
                return false
            }
        }
        else{
            if(tSet.has(t[i]))
                return false
            stMap.set(s[i],t[i])
            tSet.add(t[i])
        }
    }
    return true
};