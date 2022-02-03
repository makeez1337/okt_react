export interface ISpaceX {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string;
    },
    links: {
        article_link: null;
        video_link: string;
    },
    rocket: IRocket
}

export interface IRocket {
    rocket_name: string;
    first_stage: {
        cores: ICores[]
    },
    second_stage: {
        payloads: IPayloads[]
    }
}

export interface ICores {
    flight: number;
    core: {
        reuse_count: number;
        status: string;
    }
}

export interface IPayloads {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}