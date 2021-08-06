async function tempo(request, response) {
  const dynamicDate = new Date()
  const apiSecret = process.env.CONVERTKIT_API_SECRET

  const subscribersResponse = await fetch(
    `https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`
  )
  const subscribersResponseJson = await subscribersResponse.json()
  const inscritos = subscribersResponseJson.total_subscribers

  response.json({
    date: dynamicDate.toGMTString(),
    inscritos: inscritos
  })
}

export default tempo
