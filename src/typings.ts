/** @type {[number, number]}
 * Provide an array with longitude and latitude [$longitude, $latitude]
 */
type Coordinate = [number, number];

type OnLocationChangeEvent = {
  nativeEvent?: {
    latitude: number;
    longitude: number;
    bearing: number;
  };
};

type OnRouteProgressChangeEvent = {
  nativeEvent?: {
    distanceTraveled: number;
    durationRemaining: number;
    fractionTraveled: number;
    distanceRemaining: number;
    maneuverModifier: string;
    maneuverType: string;
    maneuverDistanceRemaining: number;
  };
};

type OnErrorEvent = {
  nativeEvent?: {
    message?: string;
  };
};

export interface IMapboxNavigationProps {
  origin: Coordinate;
  destination: Coordinate;
  waypoints?: Coordinate[];
  shouldSimulateRoute?: boolean;
  showsManeuverView?: boolean;
  onLocationChange?: (event: OnLocationChangeEvent) => void;
  onRouteProgressChange?: (event: OnRouteProgressChangeEvent) => void;
  onError?: (event: OnErrorEvent) => void;
  onCancelNavigation?: () => void;
  onArrive?: () => void;
  showsEndOfRouteFeedback?: boolean;
  hideStatusView?: boolean;
  mute?: boolean;
}
