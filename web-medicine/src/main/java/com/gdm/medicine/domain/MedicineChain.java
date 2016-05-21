/*
 * 
 *
 * 
 */
package com.gdm.medicine.domain;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

import com.gdm.core.domain.Sys;

/**
 * 医药管理表Domain
 * 
 * @author yhy
 * @version 2016-05-21
 * @----------------------------------------------------------------------------------------
 * @updated 修改描述.
 * @updated by yhy
 * @updated at 2016-05-21
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "t_medicine_chain")
public class MedicineChain extends Sys<String> {

	private static final long serialVersionUID = 1L;
	private String name;

}
