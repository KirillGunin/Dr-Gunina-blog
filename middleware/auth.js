// тут контекст, это все приложение
export default function(context) {
  // console.log(context)
  if(!context.store.getters.checkAuthUser) {
    context.redirect('/admin/auth')
  }
}
