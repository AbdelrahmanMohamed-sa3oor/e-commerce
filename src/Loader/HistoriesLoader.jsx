import ContentLoader from 'react-content-loader'

const HistoriesLoader = (props) => (
<ContentLoader
    width="100%"
    height={120}
    viewBox="0 0 1100 120"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* دائرة 1 */}
    <circle cx="120" cy="40" r="38" />
    <rect x="37" y="85" rx="5" ry="5" width="25" height="10" />
    
    {/* دائرة 2 */}
    <circle cx="240" cy="40" r="38" />
    <rect x="137" y="185" rx="5" ry="5" width="25" height="10" />

    {/* دائرة 3 */}
    <circle cx="340" cy="40" r="38" />
    <rect x="237" y="85" rx="5" ry="5" width="25" height="10" />

    {/* دائرة 4 */}
    <circle cx="440" cy="40" r="38" />
    <rect x="337" y="85" rx="5" ry="5" width="25" height="10" />

    {/* دائرة 5 */}
    <circle cx="550" cy="40" r="38" />
    <rect x="437" y="85" rx="5" ry="5" width="25" height="10" />

    {/* دائرة 6 */}
    <circle cx="660" cy="40" r="38" />
    <rect x="537" y="85" rx="5" ry="5" width="25" height="10" />

    {/* دائرة 7 */}
    <circle cx="770" cy="40" r="38" />
    <rect x="637" y="85" rx="5" ry="5" width="25" height="10" />

    {/* دائرة 8 */}
    <circle cx="880" cy="40" r="38" />
    <rect x="737" y="85" rx="5" ry="5" width="25" height="10" />

    {/* دائرة 9 */}
    <circle cx="990" cy="40" r="38" />
    <rect x="837" y="85" rx="5" ry="5" width="25" height="10" />
  </ContentLoader>
)

HistoriesLoader.metadata = {
  name: 'Alan Hurtarte',
  github: 'kenny08gt',
  description: 'Instagram histories. Picture + username',
  filename: 'HistoriesLoader',
}

export default HistoriesLoader
