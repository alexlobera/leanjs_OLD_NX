export const usernameValidator = Rule =>
  Rule.custom(name => {
    if (!name) {
      return true // Allow undefined or null values
    }

    return name.startsWith('@')
      ? `Please don't include the @ at the beginning`
      : name.match(
          /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
        )
      ? `Please don't include the full URL, only the username`
      : true
  })
