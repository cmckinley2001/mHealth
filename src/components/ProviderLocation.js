import MapWithAutocomplete from "./Maps"

function ProviderLocation() {
  return (
      <div className='map'>
        <h2>Search in the box below to find a provider near you</h2>
        <MapWithAutocomplete />
      </div>
  )
}

export default ProviderLocation