export function generateSlug(title: string) {
    if(!title) 
      return "";
    const slug = title
    .toLocaleLowerCase()
    .replaceAll("-", "")
    .replaceAll(" ", "-")
    .replaceAll("\"", "")
    .replaceAll(".", "-")
    .replaceAll(":", "")
    .replaceAll("ą", "a")
    .replaceAll("ć", "c")
    .replaceAll("ę", "e")
    .replaceAll("ł", "l")
    .replaceAll("ń", "n")
    .replaceAll("ó", "o")
    .replaceAll("ś", "s")
    .replaceAll("ż", "z")
    .replaceAll("ź", "z");
    return slug;
  }