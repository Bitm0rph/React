async function GithubInfo(){
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}
export default GithubInfo