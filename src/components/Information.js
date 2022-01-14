import './Information.css'

export default function Information({ dvalue }) {
    const gpus = [
        {
            title: 'RTX 3060',
            details: 'NVIDIA did a great job with the Ampere series of GPUs and the RTX 3060 is the latest addition for affordable gaming. It is better than the outgoing RTX 2060 and launched at $329, letting those with tight budgets upgrade and enjoy ray tracing, but gets overshadowed by its Ti sibling.'
        },
        {
            title: 'RTX 3060Ti',
            details: 'This is one impressive GPU from NVIDIA. DLSS and ray tracing support, performance to match an older (yet more expensive) RTX 3080 GPU, and a price tag that will fit into most budgets. This is the RTX 30 series graphics card to get for 1080p and 1440p gaming.'
        },
        {
            title: 'RX 6700XT',
            details: 'The AMD Radeon RX 6000 graphics cards (GPU) series recently got a new addition to it — the AMD Radeon RX 6700 XT. This midrange Radeon family aims to deliver a solid 1440p gaming performance and take on the NVIDIA RTX 3060 Ti. The RX 6700 XT however, also suffers from the same stocking and pricing issues that even the best graphics card in the market is facing right now, but if you are planning on getting one, here are the best RX 6700 XT GPUs out there.'
        },
        {
            title: 'RTX 3070',
            details: 'The GeForce RTX 3070 Founders Edition delivers truly outstanding performance, with the card outmatching the RTX 2080 Ti for less than half the price. The RTX 3070 is ideal for both 1440p and 4K gaming, and the value you are getting here is unbeatable. Availability continues to be a big hurdle, but aside from that, the RTX 3070 is the obvious upgrade for most gamers.'
        },
    ]

    return (
        <div>
            {gpus.map((gpu) => (
                gpu.title === dvalue &&
                <div key={gpu.title} className='info'>
                    <h2 className="animate__animated animate__bounceIn">{gpu.title}</h2>
                    <p className="animate__animated animate__fadeIn">{gpu.details}</p>
                </div>
            ))}
        </div>
    )
}
