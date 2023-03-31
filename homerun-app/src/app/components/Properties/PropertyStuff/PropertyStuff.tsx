import { IProperty } from "../../../../api/utils/property";
import { useState, useEffect } from "react";

const PropertyStuff = ({ property }: { property: IProperty | null }) => {
  const [valideSutff, setValidStuff] = useState<any[]>([]);

  useEffect(() => {
    if (valideSutff) {
      console.log(valideSutff);
    }
  }, [valideSutff]);

  return (
    <div className="property-stuff">
      {/* {valideSutff.map((item: any) => {
        return (
          <div className="property-stuff__item">
            <span className="property-stuff__item__name">{item}</span>
          </div>
        );
      })} */}
    </div>
  );
};

export default PropertyStuff;
