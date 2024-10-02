import { Auto } from "../dtos/autos/AutoDto";
import { CreateAutoDto } from "../dtos/autos/CreateAutoDto";
import { getHttpClient } from "./HttpClient"

const _autosClient = getHttpClient("/autos");

export class AutoService {
  public getAll = async () => {
    try {
      const response = await _autosClient.get<Auto[]>("");
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return {message: "hubo un error pai"}
    }
  }

  public create = async (createAutoDto: CreateAutoDto) => {
    try {
      const response = await _autosClient.post("", createAutoDto);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return {message: "hubo un error pai"};
    }
  }

  public update = async (idAuto: number, createAutoDto: CreateAutoDto) => {
    try {
      const response = await _autosClient.put(`/${idAuto}`, createAutoDto);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return {message: "hubo un error pai"};
    }
  }

  public delete = async (idAuto: number) => {
    try {
      const response = await _autosClient.delete(`/${idAuto}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return {message: "hubo un error pai"};
    }
  }
}