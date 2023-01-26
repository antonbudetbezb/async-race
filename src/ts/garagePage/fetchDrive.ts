export async function fetchDrive(id: string): Promise<string> {
  const result = await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, {
    method: 'PATCH',
  }).then(responce => {
    if (responce.ok) {
      return 'finish'
    } else {
      return 'stop'
    }
  })
  return result
}