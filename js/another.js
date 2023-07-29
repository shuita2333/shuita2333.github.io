//随机文章推荐
// 发现有时会和当前页面重复，加一个判断  
function randomPost() {
    fetch('/baidusitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
        let ls = data.querySelectorAll('url loc');
        while (true) {
            let url = ls[Math.floor(Math.random() * ls.length)].innerHTML;
            if (location.href == url) continue;
            location.href = url;
            return;
        }
    })
}


// hexo.extend.generator.register('random', function (locals) {
//     const config = hexo.config.random || {}
//     const posts = []
//     for (const post of locals.posts.data) {
//         if (post.random !== false) posts.push(post.path)
//     }
//     return {
//         path: config.path || 'zhheo/random.js',
//         data: `var posts=${JSON.stringify(posts)};function toRandomPost(){window.open('/'+posts[Math.floor(Math.random() * posts.length)],"_self");};`
//     }
// })