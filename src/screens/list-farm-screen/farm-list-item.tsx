import { useNavigate } from 'react-router-dom';
import Badge from '../../components/badge';
import IconButton from '../../components/icon-button';
import FarmType from '../../types/farm-type';
import DeleteFarmButton from './delete-farm-button';

type FarmListItemProps = {
  farm: FarmType;
};

function FarmListItem({ farm }: FarmListItemProps) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col border bg-white rounded-md px-4 py-2">
      <div className="flex flex-row items-center gap-4">
        {/* title */}
        <div className="flex flex-row items-center gap-3 min-w-[200px]">
          <div className="flex flex-col text-lg font-medium">{farm?.name}</div>
          <div className="flex flex-row gap-1">
            {farm?.crops?.map?.((crop: any) => (
              <Badge key={crop?.value}>{crop?.label}</Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-1"></div>
        {/* area size icons */}
        <div className="flex flex-row items-center justify-center gap-6">
          <div
            className="flex flex-row gap-1"
            title={`Área total em hectares: ${farm?.totalAreaSize}ha`}
          >
            <svg
              width="24px"
              className="text-gray-700"
              viewBox="0 0 22 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 12L0 6L11 0L22 6L11 12ZM11 9.725L17.825 6L11 2.275L4.175 6L11 9.725Z"
                fill="currentColor"
              />
              <path
                d="M8.91667 7.66667L7.25 6L8.91667 4.33333L9.51042 4.91667L8.84375 5.58333H13.1563L12.5 4.91667L13.0833 4.33333L14.75 6L13.0833 7.66667L12.5 7.08333L13.1563 6.41667H8.84375L9.5 7.08333L8.91667 7.66667Z"
                fill="currentColor"
              />
            </svg>
            <div className="flex flex-row items-center">
              <span className="text-base font-medium">
                {farm?.totalAreaSize}
              </span>
              <span className="text-xs mt-1 ml-px">ha</span>
            </div>
          </div>
          <div
            className="flex flex-row gap-1"
            title={`Área de vegetação em hectares: ${farm?.vegetationAreaSize}ha`}
          >
            <svg
              className="text-gray-700"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M280-80v-160H0l154-240H80l280-400 120 172 120-172 280 400h-74l154 240H680v160H520v-160h-80v160H280Zm389-240h145L659-560h67L600-740l-71 101 111 159h-74l103 160Zm-523 0h428L419-560h67L360-740 234-560h67L146-320Zm0 0h155-67 252-67 155-428Zm523 0H566h74-111 197-67 155-145Zm-149 80h160-160Zm201 0Z" />
            </svg>
            <div className="flex flex-row items-center">
              <span className="text-base font-medium">
                {farm?.vegetationAreaSize}
              </span>
              <span className="text-xs mt-1 ml-px">ha</span>
            </div>
          </div>
          <div
            className="flex flex-row gap-1"
            title={`Área agricultável em hectares: ${farm?.farmableAreaSize}ha`}
          >
            <svg
              className="text-gray-700"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680h120q33 0 56.5 23.5T360-600H160Zm80 360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm540 0q25 0 42.5-17.5T840-300q0-25-17.5-42.5T780-360q-25 0-42.5 17.5T720-300q0 25 17.5 42.5T780-240Zm-540-60q-25 0-42.5-17.5T180-360q0-25 17.5-42.5T240-420q25 0 42.5 17.5T300-360q0 25-17.5 42.5T240-300Zm560-139q26 5 43 13.5t37 27.5v-242q0-33-23.5-56.5T800-720H548l-42-44 56-56-28-28-142 142 30 28 56-56 42 42v92q0 33-23.5 56.5T440-520h-81q23 17 37 35t28 45h16q66 0 113-47t47-113v-40h200v201ZM641-320q6-27 14.5-43.5T682-400H436q4 23 4 40t-4 40h205Zm139 160q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm-540 0q-83 0-141.5-58.5T40-360q0-83 58.5-141.5T240-560q83 0 141.5 58.5T440-360q0 83-58.5 141.5T240-160Zm393-360Z" />
            </svg>
            <div className="flex flex-row items-center">
              <span className="text-base font-medium">
                {farm?.farmableAreaSize}
              </span>
              <span className="text-xs mt-1 ml-px">ha</span>
            </div>
          </div>
        </div>
        {/* actions */}
        <div className="ml-4 flex flex-row items-center justify-center gap-2">
          <IconButton
            icon="edit"
            onClick={() => {
              navigate(`/farms/${farm?.id}`);
            }}
          />
          <DeleteFarmButton farm={farm} />
        </div>
      </div>
      {/* farmer */}
      <div className="flex flex-row items-center gap-1">
        <svg
          className="text-gray-700 -ml-0.5"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17-62.5t47-43.5q60-30 124.5-46T480-440q67 0 131.5 16T736-378q30 15 47 43.5t17 62.5v112H160Zm320-400q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm160 228v92h80v-32q0-11-5-20t-15-14q-14-8-29.5-14.5T640-332Zm-240-21v53h160v-53q-20-4-40-5.5t-40-1.5q-20 0-40 1.5t-40 5.5ZM240-240h80v-92q-15 5-30.5 11.5T260-306q-10 5-15 14t-5 20v32Zm400 0H320h320ZM480-640Z" />
        </svg>
        <div className="text-sm text-gray-700">
          {[
            farm?.farmer?.name,
            (farm?.farmer?.register?.type as any)?.label,
            farm?.farmer?.register?.number,
          ]
            .filter(Boolean)
            .join(' | ')}
        </div>
      </div>
      {/* location */}
      <div className="flex flex-row items-center gap-1">
        <svg
          className="text-gray-700 mr-0.5"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="currentColor"
        >
          <path d="M360-440h80v-110h80v110h80v-190l-120-80-120 80v190Zm120 254q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
        </svg>
        <div className="text-sm text-gray-700">
          {[farm?.city, farm?.state].join(', ')}
        </div>
      </div>
    </div>
  );
}

export default FarmListItem;
