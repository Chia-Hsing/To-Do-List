const addList = function () {
    $('#input').on('keypress', (e) => {
        if (e.keyCode && e.keyCode === 13) {
            // enter 鍵的 keycode =13
            let input = $('#input').val() // 找到 input 內的值
            const toDoItem = `
            <div class="toDoItem">
            <input class="checkbox" type="checkbox">
            <div class="something">
            ${input}
            </div>
            <button class="delete">delete</button>
            </div>`
            $('.list').prepend(toDoItem)
            $('#input').val('')
        }
    })
}

const changeStatus = function () {
    $('.list').on('click', (e) => {
        // 事件代理
        let status = $(e.target).prop('checked') // 用prop 取得 DOM 屬性 checked ，會返回 boolean
        if (status) {
            $(e.target).parent().children('.something').css({
                'text-decoration': 'line-through',
                color: 'hsla(10, 0%, 10%, .3)',
                'font-style': 'italic',
            })
        } else if (!status) {
            $(e.target).parent().children('.something').css({
                'text-decoration': 'none',
                color: '#000',
                'font-style': 'normal',
            })
        }
    })
}

const toDelete = function () {
    $('.list').on('click', (e) => {
        const deleteButton = e.target.classList.contains('delete')
        if (deleteButton) {
            $(e.target).closest('.toDoItem').remove()
        }
    })
}

$(document).ready(() => {
    addList(), toDelete(), changeStatus()
})
