// тут контекст, это все приложение
export default function(context) {
  if(!context.store.getters.checkAuthUser) {
    context.redirect('/admin/auth')
  }
}
