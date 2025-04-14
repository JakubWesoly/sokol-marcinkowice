import useSWR from 'swr';

const fetcher = (url) =>
  axios
    .get(url, { headers: { Authorization: "Bearer " } })
    .then((res) => res.data);

const Swr = () => {
  const {
    data: countries,
    error,
    isValidating,
  } = useSWR(['https://comp-api.laczynaspilka.pl/api/bus/competition/v1/plays/2959f55a-98f5-4347-8e56-c03a1010f959/tables'], fetcher);

  if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div>
      {countries &&
        countries.map((country, index) => (
          <img key={index} src={country.flags.png} alt='flag' width={100} />
        ))}
    </div>
  );
};

export default Swr;