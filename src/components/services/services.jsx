const Services = () => {
  const services = [
    {
      id: 1,
      name: "PORTRAIT",
      price: 200,
      service: [
        "Up to 2 Hours",
        "10 Images",
        "2 Outfit Changes",
        "2 Edited Images",
        "Hi-res images on cd",
      ],
    },

    {
      id: 1,
      name: "GROUP SHOTS",
      price: 400,
      service: [
        "Up to 4 Hours",
        "50 Images",
        "4 Outfit Changes",
        "10 Edited Images",
        "Hi-res images on cd",
      ],
    },
    {
      id: 1,
      name: "WEDDING",
      price: 800,
      service: [
        "Up to 7 Hours",
        "100 Images",
        "5 Outfit Changes",
        "20 Edited Images",
        "Hi-res images on cd",
      ],
    },
  ];
  return (
    <>
      <div className="container lg:px-32 mx-auto py-5">
        <div className="header text-center">
          <h1 className="text-6xl font-semibold">Price</h1>
          <h2 className="text-lg my-3 text-bold tracking-wide	">
            DO YOU WANT ME TO SHOOT YOU?
          </h2>
          <hr />
          <p className="text-sm text-semibold mt-3 leading-6">
            Human potential, social protect; altruism inspiration Kony 2012
            collaborative cities small-scale farmers transform the world.
            Impact, conflict resolution free expression campaign contribution
            accelerate progress local solutions equal opportunity global.
            Empower gender Aga Khan, invest; planned giving deep engagement
            donate synthesize.
          </p>
        </div>
        <div className="servies mt-10 grid lg:grid-cols-3 gap-x-10 gap-y-6 justify-center items-center">
          {services.map((s) => (
            <div className="service-1 border-4 border-black px-20 w-72 lg:w-80 lg:px-10 text-center py-5 flex-col flex space-y-4">
              <div className="header">
                <h1 className="text-3xl pb-3 font-bold border-b-2 border-b-black">
                  {s.name}
                </h1>
              </div>

              <p className="text-5xl font-light">{s.price}$</p>

              <div className="groups flex flex-col space-y-2">
                {s.service.map((i) => (
                  <p className="text-sm text-lgiht">{i}</p>
                ))}
              </div>

              <button className="border-2 border-black px-4 py-3">
                Contact
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
