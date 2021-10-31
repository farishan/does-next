import generations from '../../assets/generations.dummy.json'

export default function generationsAPI(req, res) {
  res.status(200).json({ data: generations })
}
